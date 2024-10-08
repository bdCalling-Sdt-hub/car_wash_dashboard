import UserImageName from "../Shared/UserImageName"


const ClientDetails = ({ selectedClient }) => {//⭐
    return (
        <div className="center-center gap-2 flex-col p-6">
            <UserImageName image={selectedClient?.profile_image} name='' />
            <p className="font-semibold">{selectedClient?.name}</p>
            <p>{selectedClient?.email}</p>
            <p>Contact Number : {selectedClient?.phone_number}</p>
            <p>Location : {selectedClient?.address}</p>
            {
                selectedClient?.role !== 'WORKER' && <p>Package User : {selectedClient?.currentSubscription ? selectedClient?.currentSubscription : 'N/A'} </p>
            }
            {
                selectedClient?.role === 'WORKER' && <>
                    <p>total completed service : {selectedClient?.totalCompletedService}</p>
                </>
            }
            {
                selectedClient?.role !== 'WORKER' && <div className="center-center gap-6 client-details">
                    {
                        [...Array(selectedClient?.totalService).keys()].map((item, i) => <p className={`p-2 rounded-full bg-[var(--color-orange)] ${i !== 0 ? 'inactive' : ''} ${(i !== 0 && i < selectedClient?.currentServiceNumber) ? 'active' : ''} `} key={item}>{item + 1}<sup className="ml-[2px]">{item + 1 === 1 ? "st" : item + 1 === 2 ? "nd" : item + 1 === 3 ? "rd" : "th"}</sup> </p>)
                    }
                </div>
            }

        </div>
    )
}

export default ClientDetails
