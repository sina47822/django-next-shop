
const fetchUser = async (setUserId: (id: string | null) => void) => {
    try {
        const res = await fetch('/api/user');
        const data = await res.json();
        setUserId(data.userId);
    } catch (err) {
        console.error('Failed to fetch userId:', err);
    }

}
export default fetchUser