import React, { useEffect, useState } from 'react'
import CustomerEditPage from '../../components/templates/CustomerEditPage'
import { useRouter } from 'next/router';
import axios from 'axios';

function Index() {

    const [data, setData] = useState(null);

    const router = useRouter()

    const { query: { customerId }, isReady } = router;
    
    useEffect(() => {
        if (!isReady) return;
        if (customerId) {
            axios
                .get(`/api/customer/${customerId}`)
                .then(res => setData(res.data))
                .catch(err => console.error(err));
        }
    }, [isReady, customerId])

    if (data) return <CustomerEditPage data={data.data} id={customerId} />
}

export default Index