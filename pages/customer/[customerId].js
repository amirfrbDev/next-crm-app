import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import CustomerDetailsPage from '../../components/templates/CustomerDetailsPage';

function Index() {

    const [data, setData] = useState(null);

    const router = useRouter()

    const {
        query: { customerId },
        isReady,
    } = router;

    useEffect(() => {
        if (!isReady) return;
        axios
            .get(`/api/customer/${customerId}`)
            .then(res => setData(res.data))
    }, [isReady])

    if (data) return <CustomerDetailsPage data={data.data} />
    }
export default Index