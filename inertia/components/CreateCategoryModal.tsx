import { useState } from 'react';

const CreateCategoryModal = ({ isOpen, onClose }: any) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [error, setError] = useState('');

  // Liste exemple de sous-catégories
  const subCategories = [
    { id: 1, name: 'Électronique' },
    { id: 2, name: 'Vêtements' },
    { id: 3, name: 'Maison' },
    { id: 4, name: 'Sport' },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (!name || selectedSubCategories.length === 0) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Ici vous pouvez ajouter la logique d'envoi des données
    console.log({
      name,
      description,
      subCategories: selectedSubCategories
    });

    onClose();
  };

  const toggleSubCategory = (subCat: any) => {
    setSelectedSubCategories((prev: any) => 
      prev.some((sc: any) => sc.id === subCat.id) 
        ? prev.filter((sc: any) => sc.id !== subCat.id) 
        : [...prev, subCat]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Nouvelle Catégorie</h2>
          <button 
            onClick={onClose}
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
            <div className="flex flex-wrap gap-2">
              {subCategories.map((subCat) => (
                <button
                  key={subCat.id}
                  type="button"
                  onClick={() => toggleSubCategory(subCat)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedSubCategories.some((sc: any) => sc.id === subCat.id)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {subCat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Créer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryModal;