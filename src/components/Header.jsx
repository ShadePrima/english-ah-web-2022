function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className='d-flex align-center'>
                <img width={40} height={40} src="img/flag.png" alt="Logo" />
                <div>
                    <h3 className='text-uppercase'>English word</h3>
                    <p className='opacity-5'>English translation</p>
                </div>
            </div>            

        </header>
    );
}
export default Header;