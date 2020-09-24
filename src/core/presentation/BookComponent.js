import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import getSampleBookData from './BookPresenter';

const BookComponent = () => {
  const [bookNames, setBookNames] = useState([]);

  const getSampleBookDataHandler = async () => {
    const books = await getSampleBookData();
    setBookNames(books);
  };

  return (
    <View>
      <Button title="Get Sample Book" onPress={getSampleBookDataHandler} />
      {bookNames.map((item) => (
        <Text>{item.title}</Text>
      ))}
    </View>
  );
};

export default BookComponent;
