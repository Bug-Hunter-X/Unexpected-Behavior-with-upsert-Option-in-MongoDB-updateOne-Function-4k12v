# MongoDB updateOne Upsert Bug
This repository demonstrates a potential issue with the `upsert` option in MongoDB's `updateOne` function.  The bug arises when unexpected behavior occurs when attempting to update a document, with the assumption that if the document doesn't exist a new one will be created. However, this assumption is incorrect.

## Description
The provided code snippet shows a seemingly straightforward use of `updateOne` with `upsert: true`. One might expect that if a document with `name: 'John Doe'` does not exist, a new document will be created. While this is partially true, the behavior isn't always as intuitive as one might assume. 

## Steps to Reproduce
1.  Clone the repository.
2.  Ensure that you have a MongoDB instance running.
3.  Run the `bug.js` script.
4.  Observe the output and the state of your MongoDB collection. You'll notice unexpected results based on whether a document already exists.

## Solution
The solution involves using the `insertOne` function if the document does not exist, which offers more control and predictable behavior.

## Additional Notes
This bug highlights the importance of understanding the intricacies of MongoDB's update operations. Always test your update logic thoroughly, especially when using the `upsert` option, to ensure the desired behavior is achieved. The solution provides a more robust and predictable approach.