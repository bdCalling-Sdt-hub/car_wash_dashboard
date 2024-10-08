import { useState } from "react";
import PageHeading from "../../Components/Shared/PageHeading"
import SubscriptionsCards from "../../Components/Subscriptions/SubscriptionsCards"

import CouponGenerateForm from "../../Components/Subscriptions/CouponGenerateForm";
import { useFetchSubscriptionsQuery } from "../../Redux/Apis/subscriptionApis";
import Loading from "../../Components/Shared/Loading";

const Subscriptions = () => {
    const [showCoupon, setShowCoupon] = useState(false)
    const [selectedService, setSelectedService] = useState({ subscription: '', service: '' })
    const { data: subscription, isFetching, isLoading } = useFetchSubscriptionsQuery()
    const data = subscription?.data?.result?.map(item => {
        return {
            "Price": `$${item?.services?.reduce((acc, service) => acc + service.price, 0)}`,
            "Title": item?.packageTitle || null,
            "_id": item?._id || null,
            "Description": item?.packageDescription || null,
            "numberOfService": item?.numberOfService || 0,
            "Details": item?.services?.map(service => ({
                "_id": service?._id,
                "name": service?.serviceName,
                "price": `${service?.price}`,
                "percentage": service?.percentage,
                "isCouponApplied": service?.isCouponApplied,
            })),
        };
    });
    return (
        <>
            {
                (isFetching || isLoading) && <Loading />
            }
            <PageHeading text="Subscriptions" />
            <div className="mt-3 grid-3">
                {
                    data?.map((item, i) => (
                        <SubscriptionsCards setSelectedService={setSelectedService} selectedService={selectedService} key={i} i={i} data={item} />
                    ))
                }
            </div>
            {
                showCoupon && <CouponGenerateForm selectedService={selectedService} />
            }

            <div className="center-center mt-5">
                <button onClick={() => setShowCoupon(!showCoupon)} style={{
                    padding: '12px 20px',
                }} className={` ${showCoupon ? 'button-red' : 'button-orange'}`}>
                    {
                        showCoupon ? 'Close Coupon Form' : 'Generate Coupon Code'
                    }
                </button>
            </div>
        </>
    )
}

export default Subscriptions
