import React, { useState } from 'react'
import DashboardLayout from '../layout/DashboardLayout'

export default function NextPage() {
  const [activeTab, setActiveTab] = useState('appointments')

  const citas = [
    {
      id: 1,
      fecha: '2023-06-15',
      hora: '10:00',
      especialista: 'Dr. Smith',
      estado: 'Pendiente',
      paciente: 'Julia Roberts',
    },
    {
      id: 2,
      fecha: '2023-06-16',
      hora: '14:30',
      especialista: 'Dra. Johnson',
      estado: 'Confirmada',
      paciente: 'Emma Watson',
    },
    {
      id: 3,
      fecha: '2023-06-17',
      hora: '09:00',
      especialista: 'Dr. Brown',
      estado: 'Cancelada',
      paciente: 'Robert Downey Jr.',
    },
    {
      id: 4,
      fecha: '2023-06-18',
      hora: '11:00',
      especialista: 'Dr. Wilson',
      estado: 'Confirmada',
      paciente: 'Scarlett Johansson',
    }
  ]

  const pagos = [
    {
      id: 1,
      fecha: '2023-06-15',
      monto: '$100',
      estado: 'Pendiente',
      paciente: 'Luisito Comunica',
    },
    {
      id: 2,
      fecha: '2023-06-16',
      monto: '$150',
      estado: 'Pendiente',
      paciente: 'German Garmendia',
    },
    {
      id: 3,
      fecha: '2023-06-17',
      monto: '$80',
      estado: 'Pendiente',
      paciente: 'Quackity',
    },
    {
      id: 4,
      fecha: '2023-06-18',
      monto: '$120',
      estado: 'Pendiente',
      paciente: 'Mr Beast',
    },
    {
      id: 5,
      fecha: '2023-06-19',
      monto: '$180',
      estado: 'Pendiente',
      paciente: 'ElDed',
    },
  ]

  function handleLogout() {
    window.location.href = '/home'
  }

  return (
    <React.Fragment>
      <DashboardLayout>
        <>
          <div className="w-[55%] p-6">
            <div className='flex items-center justify-center align-middle text-2xl font-light mb-4 text-[#00000096] bg-[#c1ddc379] rounded-xl py-6 px-20 gap-8'>
              <div className="flex justify-start">
                <p className="text-[26px] mr-10 font-normal italic">
                  “El éxito es la suma de pequeños esfuerzos repetidos día tras día.”
                </p>
              </div>
              <div className="flex justify-end w-[264px]">
                <img src="/images/Mujer.png" alt="Image" width={164} height={164} className='flex' />
              </div>
            </div>
            <div className='mt-4 bg-[#C1DDC3] rounded-xl w-full py-4' />
          </div>
          <div className="w-[45%] bg-[#A0C3EB] rounded-xl py-8 px-8">
            <div className="flex justify-center align-middle space-x-48 border-b border-[#2523398a] text-[#2523398a] text-2xl">
              <button
                onClick={() => setActiveTab('appointments')}
                className={`pb-2 px-4 font-medium relative
                  after:content-[''] after:absolute after:h-[2px] after:w-full after:bottom-0 after:left-0 
                  after:bg-${activeTab === 'appointments' ? 'white' : '[#ffffff50]'}`}
              >
                Próximas citas
              </button>
              <button
                onClick={() => setActiveTab('payments')}
                className={`pb-2 px-4 font-medium relative
                  after:content-[''] after:absolute after:h-[2px] after:w-full after:bottom-0 after:left-0 
                  after:bg-${activeTab === 'payments' ? 'white' : '[#ffffff50]'}`}
              >
                Últimos pagos
              </button>
            </div>
            <div className="mt-6 px-6">
              {activeTab === 'appointments' ? (
                <div>
                  {
                    citas.map((cita) => (
                      <div key={cita.id} className="flex flex-row space-x-16 bg-[#c4e9f4bd] rounded-xl p-4 mb-4">
                        <div className='flex flex-col justify-center items-center'>
                          <div className='w-16 h-16 rounded-full bg-[#b5d4b7] flex justify-center items-center'>
                            <img src="/images/Calendario.png" alt="Image" width={32} height={32} />
                          </div>
                        </div>
                        <div className='flex flex-col justify-center'>
                          <p className="text-sm text-[#2523398a] font-bold">{cita.paciente}</p>
                          <p className="text-sm text-[#2523398a]">Estado: {cita.estado}</p>
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="text-sm text-[#2523398a]">Fecha: {cita.fecha}</p>
                          <p className="text-sm text-[#2523398a]">Hora: {cita.hora}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ) : (
                <div>
                  {
                    pagos.map((pago) => (
                      <div key={pago.id} className="flex flex-row space-x-16 bg-[#c4e9f4bd] rounded-xl p-4 mb-4">
                        <div className='flex flex-col justify-center items-center'>
                          <div className='w-16 h-16 rounded-full bg-[#b5d4b7] flex justify-center items-center'>
                            <img src="/images/YaPago.png" alt="Image" width={32} height={32} />
                          </div>
                        </div>
                        <div className='flex flex-col justify-center'>
                          <p className="text-sm text-[#2523398a] font-bold">{pago.paciente}</p>
                          <p className="text-sm text-[#2523398a]">Estado: {pago.estado}</p>
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="text-sm text-[#2523398a]">Fecha: {pago.fecha}</p>
                          <p className="text-sm text-[#2523398a]">{pago.monto}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              )}
            </div>
          </div>
        </>
      </DashboardLayout>
    </React.Fragment>
  )
}
