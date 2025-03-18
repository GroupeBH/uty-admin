// resources/js/Pages/Categories/Index.tsx
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { Link, router } from '@inertiajs/react'
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import AdminLayout from '../../layouts/admin_layout';
import React from 'react'
import {BadgeAlert} from 'lucide-react'
import { Toast } from 'primereact/toast'
import { Toast as ToastType } from 'primereact/toast';

const CategoriesIndex = ({ categories }: any) => {
  const [selectedToDelete, setSelectedToDelete] = React.useState<any>(null)
  const [deleting, setDeleting] = React.useState(false)

  const toast = React.useRef<ToastType>(null);

  const handleDelete = () => {
    try {      
      router.delete(`/categories/${selectedToDelete?._id}`)
      toast?.current?.show({
        severity: 'success',
        summary: 'Succès',
        detail: 'Catégorie supprimée avec succès',
        life: 3000
      })
      setDeleting(false)
    } catch (error) {
      console.log(error)
      toast?.current?.show({
        severity: 'error',
        summary: 'Erreur',
        detail: error.message,
        life: 5000
      })
      setDeleting(false)
    }
  }


  const actionBodyTemplate = (rowData: any) => {
    return (
      <div className="flex gap-2">
        <Link href={`/admin/categories/${rowData?._id}`}>
          <Button 
            icon="pi pi-eye" 
            className="p-button-info p-button-text" 
            tooltip="Détails"
          />
        </Link>
        <Button
          onClick={() => {
            setSelectedToDelete(rowData)
            setDeleting(true)
          }}
          icon="pi pi-trash" 
          className="p-button-danger p-button-text" 
          tooltip="Supprimer"
        />
      </div>
    )
  }

  return (
    <AdminLayout>
      <div className="bg-white p-10 h-50 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-slate-500">Les catégories des produits et services</h1>
          <Link href="categories/create">
            <Button
              label="Ajouter une catégorie"
              icon="pi pi-plus"
              className="flex items-center gap-3 bg-blue-500 p-3 text-white text-[12.5px] rounded-lg"
            />
          </Link>
        </div>

        <DataTable
          value={categories}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          currentPageReportTemplate="{first} à {last} sur {totalRecords}"
          emptyMessage="Aucune catégorie trouvée"
          tableStyle={{ minWidth: '50rem' }}
          showGridlines 
          className="w-[70vw]"
        >
          <Column className='border p-1' field="name" header="Nom" sortable />
          <Column className='border p-1' field="description" header="Description" />
          <Column
            className='border p-1'
            header="Actions" 
            body={actionBodyTemplate} 
            style={{ width: '120px' }}
          />
        </DataTable>

        <Dialog
          visible={deleting}
          onHide={() => {if (!deleting) return; setDeleting(false); }}
        >
          <div className='flex flex-col gap-5 items-center justify-center px-10'>
            <BadgeAlert size={50} className='text-red-500' />
            <div>
              <p className="m-0">
                êtes-vous sûr de vouloir supprimer cette catégorie ?
              </p>
              <p className="mt-2 text-center">
                catégorie <span className='text-blue-500'>{`${selectedToDelete?.name}`}</span> 
              </p>
            </div>
           
          </div>
         
          <div className='flex gap-5 mt-4 justify-end px-10 pb-10'>
            <button className='border p-2 text-black rounded-lg' onClick={() => setDeleting(false)}>
              Annuler
            </button>
            <button className='bg-red-500 p-2 text-white rounded-lg' onClick={handleDelete}>
              Supprimer
            </button>  
          </div>
        </Dialog>
      </div>
    </AdminLayout>
  )
}

export default CategoriesIndex
