class Header extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.innerHTML = `
            <style>
                header{
            width: 100%;
            height: 100px;
    
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-inline: 120px;
    
            background-color: #2E5266;
            }
    
            .logo-section a{
                background: none;
                border: none;
                width: fit-content;
                height: fit-content;
    
                cursor: pointer;
            }
    
            .logo-section img{
                width: 120px;
                height: 120px;
            }
    
            .btn-header-section{}
    
            </style>
            <header>
                <div class="logo-section">
                    <a href="../index.html">
                        <img src="../assets/logo_Axis.png" alt="">
                    </a>
                </div>
    
                <div class="btn-header-section">
                    <p>BOTÕES</p>
                </div>
            </header>
            `;
        }
    }

    customElements.define ('header-component', Header);

