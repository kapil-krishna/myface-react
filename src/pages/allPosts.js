function AllPosts () {
    const response = async () => {
        await fetch('http://localhost:8080/api/posts');
    }
    const myJson = async () => {
        await response.json();
    }
    return (JSON.stringify(myJson));
}

export default AllPosts;

