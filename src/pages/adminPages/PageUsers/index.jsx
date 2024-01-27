import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useRef, useState } from 'react';
import { useUserCreate, useUserDelete, useUsers } from '../../../hooks/useUsers';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useForm } from 'react-hook-form';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
const PageUsers = () => {
    const toast = useRef();
    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const [levelSelected, setLevelSelected] = useState(1);
    const { 
        register: createData, 
        handleSubmit: createSubmit, 
        setValue: createValue, 
        reset: createReset 
    } = useForm({
        defaultValues: {
            user_level: 1
        }
    });
    const { 
        register: editData, 
        handleSubmit: editSubmit, 
        setValue: editValue,
        reset: editReset
    } = useForm();
    const { data: usuarios } = useUsers();
    const userCreate = useUserCreate();
    const userDelete = useUserDelete();
    
    const createUser = (data) => {
        userCreate.mutateAsync(data, {
            onSuccess: (response) => {
                toast.current.show({
                    severity: response.type,
                    detail: response.message
                });
            },
            onError: () => {
                toast.current.show({
                    severity: response.type,
                    detail: response.message
                });
            }
        });
        createReset();
        setVisibleCreate(false);
    }

    const confirm = (id) => {
        confirmDialog({
            header: 'Atenção: ',
            message: 'Deseja realmente apagar este item?',
            accept: () => {
                userDelete.mutateAsync(id, {
                    onSuccess: (response) => {
                        toast.current.show({
                            severity: response.type,
                            detail: response.message
                        });
                    },
                    onError: () => {
                        toast.current.show({
                            severity: response.type,
                            detail: response.message
                        });
                    }
                });
            },
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
        })
    }

    return (
        <>
            <div className={'flex justify-content-between mb-4'}>
                <h1>Usuarios</h1>
                <Button onClick={() => setVisibleCreate(true)}>Novo usuario</Button>
            </div>

            <DataTable value={usuarios} loading={userCreate.isLoading} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
                <Column field="user_name" header="Nome"></Column>
                <Column field="user_email" header="Email"></Column>
                <Column header="Nivel" body={(rowData) => (
                    <div className='bg-primary border-round text-light inline-block p-1'>
                        { rowData.user_level === 1 ? 'Usuario' : 'Admin' }
                    </div>
                )}></Column>
                <Column header={'Ações'} bodyClassName={'w-1'} body={(rowData) => (
                    <div className='flex gap-3'>
                        <Button 
                            rounded 
                            icon={'pi pi-pencil'}
                            onClick={() => {
                                editValue('user_id', rowData.user_id);
                                editValue('user_name', rowData.user_name);
                                editValue('user_email', rowData.user_email);
                                setLevelSelected(rowData.user_level);
                                setVisibleEdit(true);
                            }}
                        />
                        <Button 
                            rounded 
                            icon={'pi pi-trash'}
                            onClick={() => {
                                confirm(rowData.user_id);
                            }}
                        />
                    </div>
                )}/>
            </DataTable>

            <Sidebar
                visible={visibleCreate}
                onHide={() => setVisibleCreate(false)}
                position={'right'}
            >
                <form onSubmit={createSubmit(createUser)}>
                    <label htmlFor="name" className='block mb-1'>Nome</label>
                    <InputText 
                        id='name' 
                        type='text' 
                        className='w-full mb-3'
                        placeholder='Digite o nome' 
                        {...createData('user_name', {required: true})}
                    />
                    <label htmlFor="email" className='block mb-1'>Email</label>
                    <InputText 
                        id='email' 
                        type='email' 
                        className='w-full mb-3'
                        placeholder='Digite o email' 
                        {...createData('user_email', {required: true})}
                    />
                    <label htmlFor="password" className='block mb-1'>Senha</label>
                    <InputText 
                        id='password' 
                        type='password' 
                        className='w-full mb-3'
                        placeholder='********'
                        {...createData('user_password', {required: true})}
                    />
                    <label htmlFor="level" className='block mb-1'>Nível</label>
                    <Dropdown 
                        value={levelSelected}
                        onChange={(e) => {
                            setLevelSelected(e.target.value);
                            createValue('user_level', e.target.value);
                        }}
                        className='w-full'
                        options={[
                            {
                                level: 'User',
                                value: 1
                            },
                            {
                                level: 'Admin',
                                value: 2
                            }
                        ]}
                        optionLabel='level'
                        optionValue='value'
                    />
                    <Button 
                        label='Salvar'
                        type='submit'
                        className='w-full mt-3'
                    />
                </form>
            </Sidebar>
            <Sidebar
                visible={visibleEdit}
                onHide={() => setVisibleEdit(false)}
                position={'right'}
            >
                <form onSubmit={editSubmit(createUser)}>
                    <label htmlFor="name" className='block mb-1'>Nome</label>
                    <InputText 
                        id='name' 
                        type='text' 
                        className='w-full mb-3'
                        placeholder='Digite o nome' 
                        {...editData('user_name', {required: true})}
                    />
                    <label htmlFor="email" className='block mb-1'>Email</label>
                    <InputText 
                        id='email' 
                        type='email' 
                        className='w-full mb-3'
                        placeholder='Digite o email' 
                        {...editData('user_email', {required: true})}
                    />
                    <label htmlFor="password" className='block mb-1'>Senha</label>
                    <InputText 
                        id='password' 
                        type='password' 
                        className='w-full mb-3'
                        placeholder='********'
                        autoComplete='new-password'
                        {...editData('user_password', {required: true})}
                    />
                    <label htmlFor="level" className='block mb-1'>Nível</label>
                    <Dropdown 
                        value={levelSelected}
                        onChange={(e) => {
                            setLevelSelected(e.target.value);
                            editValue('user_level', e.target.value);
                        }}
                        className='w-full'
                        options={[
                            {
                                level: 'User',
                                value: 1
                            },
                            {
                                level: 'Admin',
                                value: 2
                            }
                        ]}
                        optionLabel='level'
                        optionValue='value'
                    />
                    <Button 
                        label='Salvar'
                        type='submit'
                        className='w-full mt-3'
                    />
                </form>
            </Sidebar>
            <Toast ref={toast} />
            <ConfirmDialog />
        </>
    )
}

export default PageUsers;