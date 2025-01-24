```javascript
db.collection('users').findOne({ name: 'John Doe' }).then((doc) => {
  if (doc) {
    // Update existing document
    const update = { $set: { age: 30 } };
    db.collection('users').updateOne({ name: 'John Doe' }, update).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });
  } else {
    // Insert new document
    const doc = { name: 'John Doe', age: 30 };
    db.collection('users').insertOne(doc).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });
  }
}).catch((error) => {
  console.error(error);
});
```