import React from 'react'

export default function Footer(props) {

    const {theme, relative} = props;

    return (
        <footer className={relative===true ? theme+" d-sm-none d-md-block text-muted text-center relative-pos":theme+" d-sm-none d-md-block text-muted text-center"}>
            <div className="container">
                <div className="row justify-content-center mt-3">
                    <div className={"col-md-10 col-sm-6 col-xs-12 "+theme}>
                        <p className="copyright-text font-weight-bolder">Copyright &copy; 2020 - All Rights Reserved by &nbsp;
                            <a href='https://twitter.com/Guuri11' >Sergio Gurillo Corral 💻💯</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
