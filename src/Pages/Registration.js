import { Link } from "react-router-dom"
import React from "react"
import './Registration.css'

export default function Registration(){
    return(
    <body>
        <div id="head"></div>
            <h2 class="RegistrationBox1">
                Registration
            </h2>
            <div class="RegistrationBox2">
                <div class="container-questions">
                    <form>
                        <h4>
                        <label class="question" for="userInput">
                            Display name:  
                        </label><br/>
                        <input className="RegistrationInput" type="text" id="userInput" name="userInput" placeholder="johndoe">
                        </input><br/>
                        <label class="question" for="userInput">
                            Email:  
                        </label><br/>
                        <input className="RegistrationInput" type="email" id="userInput" name="userInput" placeholder="example@gmail.com">
                        </input><br/>
                        <label class="question" for="userInput">
                            Create Password:  
                        </label><br/>
                        <input className="RegistrationInput" type="password" minlength="8" max="24" maxlength="24" id="userInput" name="userInput" placeholder="********">
                        </input><br/>
                        <label class="question" for="userInput">
                            Confirm Password:  
                        </label><br/>
                        <input className="RegistrationInput" type="password" minlength="8" max="24" maxlength="24" id="userInput" name="userInput" placeholder="********">
                        </input><br/>
                        </h4>
                        <h2>
                            <Link to="/login">
                                Already have an account
                            </Link>
                        </h2>
                        <div class="btns">
                            <button type="button" class="RegistrationSubmitBtn" id="btn-next" onclick="location.href='./SignUpPage-Learner2.html'">
                                Submit
                            </button>
                        </div>
                    </form>
                    <h3 class="last-in-box">
                        By clicking Continue or Sign up, you agree to Farmhouse fare terms of use Term and  Privacy Policy
                    </h3>
                </div>
            </div>
            <div id="footer">
                
            </div>
        </body>
    )
}
