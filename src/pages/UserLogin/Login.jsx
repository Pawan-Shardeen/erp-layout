import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import CompanyLogo from '../../assets/images/Shardeen_ERP.png'

export default function Login() {
    return (
        <section id='cntnr-userLogin'>
            <div className='bg-white app-shadow p-5'>
                <div className="card border-0">
                    <div className="card-header bg-transparent d-flex align-items-center justify-content-center">
                        <Link className='p-1' to="/">
                            <img src={CompanyLogo} alt="logo" height={40} />
                        </Link>

                    </div>
                    <div className="card-body pb-0">
                        <form onSubmit={()=>{}}>
                            <div className='type-text text-start mb-3'>
                                <label className='form-label' htmlFor="username">Username</label><span
                                    className='text-danger fs-6 fw-bold'>*</span>
                                <input className='form-control rounded-pill lh-sm' type="text" name="username"
                                    id="username" autoComplete="off" />
                            </div>

                            <div className='type-text text-start mb-3'>
                                <label className='form-label' htmlFor="password">Password</label><span
                                    className='text-danger fs-6 fw-bold'>*</span>
                                <input className='form-control rounded-pill lh-sm' type="password" name="password"
                                    id="password" autoComplete="off" />
                                <div>
                                    <Link className='text-decoration-none' to="/">Forgot password?</Link>
                                </div>
                            </div>

                            <div className='text-center'>
                                <button className='btn btn-primary m-2 btn-sm rounded-pill w-75'
                                    type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
