// resources/js/Pages/Categories/Show.tsx
import { useState, useRef } from 'react'
import { router } from '@inertiajs/react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast'
import { Toast as ToastType } from 'primereact/toast';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import AdminLayout from '../../layouts/admin_layout';

const ShowCategory = ({ category, subcategories }: any) => {

  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    id: category?._id?.toString(),
    name: category?.name,
    description: category?.description,
    subcategories: category?.subcategories?.map((sc: any) => sc?._id)
  })
  const [subCategoriesOptions] = useState(
    subcategories?.map((sc: any) => ({ name: sc.name, value: sc._id }))
  )
  const toast = useRef<ToastType>(null);

  const handleSubmit = async () => {
    console.log(formData)
    try {
      await router.put(`/categories/${category?._id}`, formData);
      toast?.current?.show({
        severity: 'success',
        summary: 'Succès',
        detail: 'Catégorie mise à jour',
        life: 3000
      })
      setEditMode(false)
    } catch (error) {
      toast?.current?.show({
        severity: 'error',
        summary: 'Erreur',
        detail: error.message,
        life: 5000
      })
    }
  }

  return (
    <AdminLayout>
        <div className="bg-white p-10 rounded shadow">
            <Toast ref={toast} />
            
            <div className="flex justify-between items-center mb-5">
                <div className="text-lg font-semiBold text-slate-500">
                  {editMode ? `Modifier catégorie: ${category?.name}` : category?.name}
                </div>
                <Button
                    icon={editMode ? 'pi pi-save' : 'pi pi-pencil'}
                    label={editMode ? 'Sauvegarder' : 'Modifier'}
                    className="flex gap-3 items-center bg-blue-500 text-white text-[15px] p-2 rounded-lg"
                    onClick={editMode ? handleSubmit : () => setEditMode(true)}
                />
            </div>

            {editMode ? (
                <div className="grid formgrid">
                <div className="col-12 mb-3">
                    <label htmlFor="name" className="block font-medium mb-2">
                      Nom
                    </label>
                    <InputText
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2 border"
                    />
                </div>

                <div className="col-12 mb-3">
                    <label htmlFor="description" className="block font-medium mb-2">
                      Description
                    </label>
                    <InputText
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        //   rows={4}
                        className="w-full p-2 border"
                    />
                </div>

                <div className="col-12">
                    <label className="block font-medium mb-2">
                      Sous-catégories
                    </label>
                    <MultiSelect
                        value={formData.subcategories}
                        options={subCategoriesOptions}
                        onChange={(e) => setFormData({ ...formData, subcategories: e.value })}
                        optionLabel="name"
                        display="chip"
                        className="w-full p-2 border"
                    />
                </div>
                </div>
            ) : (
                <div className="grid">
                    <div className="col-12">
                        <p className="text-[15px] font-light">{category.description}</p>
                    </div>
                    
                    <div className="col-12">
                     <h3 className="">Sous-catégories associées</h3>
                     <DataTable value={category?.subcategories} className="datatable-sm">
                        <Column 
                            field="name" 
                            header="Nom" 
                            body={(rowData) => (
                            <Tag value={rowData?.name} className="mr-2" />
                            )}
                        />
                        <Column 
                            header="Actions" 
                            body={() => (
                            <Button 
                                icon="pi pi-ellipsis-h" 
                                className="p-button-text p-button-secondary" 
                            />
                            )}
                        />
                    </DataTable>
                </div>
                </div>
            )}
            </div>
    </AdminLayout>
  )
}

export default ShowCategory
