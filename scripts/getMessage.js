async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorldContract = await HelloWorld.attach('0x59C7EBF52D118F6ab1520c8d6cBFa930614106e4')
    
    console.log("Current message:", await helloWorldContract.message())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });