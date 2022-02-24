async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorldContract = await HelloWorld.attach('0xcFE1E8D709cEab46Bac85E1312F3620D411ec210')
    
    console.log("Current message:", await helloWorldContract.message())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });