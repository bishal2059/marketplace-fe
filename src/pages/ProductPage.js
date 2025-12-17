import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../components/home/Footer';
import NavUser from '../components/user/NavUser';
import UserBody from '../components/user/UserBody';
import PageContext from '../contexts/Pages';
import getAllProducts from '../hooks/getAllProducts';

function ProductPage() {
  const [state, setstate] = useState(true);
  const limit = 5;
  const [products, setproducts] = useState({});
  const [page, setpage] = useState(1);
  const [name, setname] = useState('');

  useEffect(() => {
    (async function () {
      const respone = await getAllProducts(limit, page, name);
      setproducts(respone);
    })();
  }, [page, name, state]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavUser />

      <Box sx={{ flexGrow: 1 }}>
        <PageContext.Provider value={{ page, name, setpage, setname }}>
          <UserBody
            allProducts={products?.products}
            previous={products?.previous}
            next={products?.next}
            state={setstate}
          />
        </PageContext.Provider>
      </Box>

      <Footer />
    </Box>
  );
}

export default ProductPage;
