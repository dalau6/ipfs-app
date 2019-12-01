const ipfsClient = require('ipfs-http-client');

const ipfs = ipfsClient('http://localhost:5001');

const addFile = async () => {
    const file = { path: 'testfile', content: Buffer.from('hello') };
    const filesAdded = await ipfs.add(file);
    console.log(filesAdded[0]);
}
