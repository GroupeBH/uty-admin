import { useState } from 'react';
// import { Link, usePage } from '@inertiajs/react'
import { router } from '@inertiajs/react'
import AdminLayout from '../../layouts/admin_layout';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Create = ({ subcategories }: any) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (!name || selectedSubCategories.length === 0) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    try {
        router.post('/categories', {
            name,
            description,
            subcategories: selectedSubCategories?.map((sc: any) => sc._id),
        }, {
            onSuccess: () => {
              setLoading(false);
            //   router.visit('categories/show');
            },
            onError: (error) => setError(error?.message),
            onFinish: () => setLoading(false)
          })
    } catch (error) {
        setError(error.message);
    }
   
    // console.log({
    //   name,
    //   description,
    //   subcategories: selectedSubCategories?.map((sc: any) => sc._id),
    // });

  };

  return (
    <AdminLayout>
        <div className="">
            <div className="bg-white rounded-lg w-70 p-6">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Nouvelle Catégorie</h2>
                <button 
                    // onClick={onClose}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>

                <form onSubmit={handleSubmit}>
                {error && (
                    <div className="mb-4 text-red-500 text-sm">{error}</div>
                )}

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Nom *</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Nom de la catégorie"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Description de la catégorie"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Sous-catégories *</label>
                    <MultiSelect
                        value={selectedSubCategories}
                        options={subcategories}
                        onChange={(e) => {
                            console.log(e.value);
                            setSelectedSubCategories(e.value)
                        }}
                        optionLabel="name"
                        display="chip"
                        placeholder="Sélectionnez des sous-catégories"
                        className="w-full p-3 border rounded-lg flex gap-5"
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        {loading ? 'En cours de création...' : 'Créer la catégorie'}
                    </button>
                </div>
                </form>
            </div>
            </div>
    </AdminLayout>
  );
};

export default Create;