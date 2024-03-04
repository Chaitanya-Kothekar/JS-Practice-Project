try {
    console.log("Start of try block");
    // Code that may throw an exception
    throw new Error("An error occurred");
    console.log("End of try block (this line won't be executed)");
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("Finally block always executes, regardless of errors");
}
