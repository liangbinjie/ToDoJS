import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png';

export default function Navbar() {
    return (
        <>
          <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Sign In</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
};
