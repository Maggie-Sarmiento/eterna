import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme, Paper } from '@mui/material';
import Modal from '@mui/material/Modal';
import styles from './ModalDetails.module.css'
import { makeStyles } from '@mui/material';
import { display } from '@mui/system';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1000px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const ModalDetails = ({ product, open, setOpen
}) => {
  const [data, setData] = useState({});


  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    saveDataApi(data);
    handleClose();
  };

  return (
    <section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ThemeProvider theme={theme}>
            <Paper elevation={3} className="paper" sx={{display: 'flex' }} >
              <img src={product.img} alt="" className={styles.imgModal} />
              
              <Box
                sx={{
                  paddingX: 5,
                  position: 'relative',
                }}
                >
                  <Box
                  sx={{
                    display: 'flex',
                  }}
                  >
                  <Typography
                    variant="h6"
                    component="h3"
                    className={styles.productPrice}
                    sx={{
                      fontSize: '0.8em',
                      fontWeight: 'bold',
                    }}
                    marginTop={'4em'}
                    >
                    $&nbsp;
                    {product.price}
                    &nbsp;MXN
                  </Typography>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    marginTop={1}
                  >
                  </Box>
                </Box>
                <Typography
                  variant="subtitle1"
                  component="h2"
                  className={styles.productName}
                  sx={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.8em',
                    marginTop: '0.1em',
                    marginBottom: '0.8em'
                  }}
                >
                  {product.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                  }}
                  >
                  <Typography
                    variant="h6"
                    component="h3"
                    className={styles.producSku}
                    sx={{
                      fontSize: '0.8em',
                      marginBottom: '0.8em',
                    }}
                  >
                    &nbsp;
                    {product.sku}
                    &nbsp;
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                  }}
                  >
                  <Typography
                    variant="h6"
                    component="h3"
                    className={styles.productDescription}
                    sx={{
                      fontSize: '0.8em',
                      marginBottom: '5em'
                    }}
                    height={150}
                  >
                    &nbsp;
                    {product.description}
                    &nbsp;
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </ThemeProvider>
        </Box>
      </Modal>
    </section>
  );
};

export default ModalDetails;
