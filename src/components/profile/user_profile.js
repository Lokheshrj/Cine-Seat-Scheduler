import React, { Fragment, useEffect, useState } from 'react';
import { deleteBooking, getUserBooking, getUserDetails } from '../../api connector/connector';
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Userprofile = () => {
  const [booking, setBooking] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserBooking()
      .then((res) => setBooking(res.booking))
      .catch((err) => console.log(err));

    getUserDetails()
      .then((res) => setUser(res.user))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    deleteBooking(id)
      .then((res) => {
        setBooking(booking.filter((item) => item._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box width={'100%'} display={'flex'}>
      <Fragment>
        {' '}
        {user && (
          <Box width={'30%'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <AccountCircleRoundedIcon sx={{ fontSize: '10rem' }} />
            <Typography padding={1} width={'auto'} textAlign={'center'} border={'1px solid #ccc'} borderRadius={6}>
              Name: {user.name}
            </Typography>

            <Typography padding={1} width={'auto'} textAlign={'center'} border={'1px solid #ccc'} borderRadius={6}>
              Email: {user.email}
            </Typography>
          </Box>
        )}
        {booking.length > 0 && (
          <Box width={'70%'} display={'flex'} flexDirection={'column'}>
            <Typography variant="h3" fontFamily={'verdana'} textAlign={'center'} padding={2}>
              Bookings
            </Typography>
            <Box margin={'auto'} display={'flex'} flexDirection={'column'} width={'80%'}>
              <List>
                {booking.map((book, index) => (
                  <ListItem key={book._id} sx={{ bgcolor: '#00d386', color: 'white', textAlign: 'center', margin: 1 }}>
                    <ListItemText sx={{ margin: 1, width: 'auto', textAlign: 'left' }}>Movie: {book.movie.title}</ListItemText>
                    <ListItemText sx={{ margin: 1, width: 'auto', textAlign: 'left' }}>Seat: {book.seatnumber}</ListItemText>
                    <ListItemText sx={{ margin: 1, width: 'auto', textAlign: 'left' }}>Date: {new Date(book.date).toDateString()}</ListItemText>
                    <IconButton onClick={() => handleDelete(book._id)} color="error">
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        )}
      </Fragment>
    </Box>
  );
};

export default Userprofile;
