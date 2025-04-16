import React, { useEffect, useState } from 'react'
import CustomerEditPage from '../../components/templates/CustomerEditPage'
import { useRouter } from 'next/router';
import axios from 'axios';

function Index() {

    const [data, setData] = useState(null);

    const router = useRouter()
    const { query: { customerId }, isReady } = router;

    useEffect(() => {
        if (isReady) return;
        axios
            .get(`/api/customer/${customerId}`)
            .then(res => setData(res))
    }, [isReady])

    return <CustomerEditPage />
}

export default Index