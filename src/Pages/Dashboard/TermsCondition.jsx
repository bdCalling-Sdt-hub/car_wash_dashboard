import React, { useEffect, useState } from 'react'
import PageHeading from '../../Components/Shared/PageHeading';
import Editor from '../../Components/Shared/Editor';
import Button from '../../Components/Shared/Button';
import { useAddTermsMutation, useGetTermsQuery } from '../../Redux/Apis/settingApi';
import Loading from '../../Components/Shared/Loading';
import toast from 'react-hot-toast';

const TermsCondition = () => {
    //states 
    const [content, setContent] = useState('');
    // rtk query
    const [addTerms, { isLoading }] = useAddTermsMutation();
    const { data, isLoading: LoadingData, isError, error, isFetching } = useGetTermsQuery()
    // handler 
    const AddPrivacyHandler = () => {
        const data = { description: content, }
        addTerms(data).unwrap().then((res) => toast.success(res?.message || 'Privacy policy added successfully')).catch((err) => toast.error(err?.data?.message || 'something went wrong'))
    }
    useEffect(() => {
        if (data) setContent(data?.data?.description)
    }, [data])
    return (
        <div className='bg-[var(--bg-gray-20)] p-4 rounded-md'>
            {(isLoading || LoadingData) && <Loading />}
            <PageHeading text={`Terms & Condition`} />
            <div className='mt-10'>
                <Editor content={content} setContent={setContent} />
            </div>
            <Button handler={() => AddPrivacyHandler()} text={(isLoading || LoadingData) ? 'please Wait...' : 'Save Changes'} classNames={`button-black mx-auto mt-6`} />
        </div>
    )
}

export default TermsCondition
