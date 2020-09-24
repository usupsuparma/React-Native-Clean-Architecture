import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import getSampleBookData from './BookPresenter';
import {Card} from '../../common/Card';

const BookComponent = () => {
  const [bookNames, setBookNames] = useState([]);
  const [count, setCounts] = useState(0);

  const getSampleBookDataHandler = async () => {
    const books = await getSampleBookData();
    setBookNames(books);
  };

  return (
    <View>
      <Button title="Get Sample Book" onPress={getSampleBookDataHandler} />
      <Button
        title="count"
        onPress={() => {
          setCounts(count + 1);
        }}
      />
      {bookNames.map((item) => (
        <Card>
          <Text>{item.title}</Text>
        </Card>
      ))}
      <Text>{count}</Text>
    </View>
  );
};

export default BookComponent;
