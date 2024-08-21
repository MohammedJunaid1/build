import {Request, Response, Router}  from "express"
import { getGroqChatCompletion } from "./groq"


const route = Router()

route.post("/",async (req,res:Response)=>{
    try {
       
        const {prompt} = req.body
      
        const chat =  await getGroqChatCompletion(prompt)
        const chat2 = await getGroqChatCompletion(`Please generate the following content in an HTML format suitable for embedding in a React component. Ensure that the HTML tags are well-structured and align with React's JSX syntax. Specifically:

                    - Use self-closing tags where applicable (e.g., <img />, <input />).
                    - Replace class attributes with className.
                    - Make sure all attributes are properly quoted.
                    - Ensure the structure is semantically correct for use in a React component.
                    Here’s the content to convert:

                    ${chat.choices[0]?.message?.content}

                    Please ensure the generated HTML is ready to be copied directly into a React component without further modification.`)

        console.log(chat2.choices[0]?.message?.content)
        res.json({answer:chat2.choices[0]?.message?.content})
    
    } catch (error) {
        console.log(error)
    }
  
})

export default route