import './styles.css';

const ToggleMode = () => {

    const [checked, setChecked] = useState(true)

    useEffect(()=>{
        const checkbox = document.getElementById("checkbox");
        setChecked(checkbox)
        if(checkbox){
            setChecked(false);
        }
        
    }, []);

    // checkbox.addEventListener("change", () => {
    //     document.body.classList.toggle("dark")
    // });

    return (
        <div>
            {/* <input type="checkbox" className="checkbox" id="checkbox"/>
                <label for="checkbox" className="checkbox-label">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <span className="ball"></span>
                </label> */}
            <input type="checkbox" className="checkbox opacity-0 position-absolute" id="checkbox" />
            <label htmlFor="checkbox" className="checkbox-label bg-blue-600 w-25 h-26 rounded-full position-relative
            p-5 cursor-pointer">
                <i className="fas fa-moon text-yellow-400"></i>
                <i className="fas fa-sun text-yellow-400"></i>
                <span className="ball"></span>
            </label>
        </div>
    )
}

export default ToggleMode
