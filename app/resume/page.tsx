import React from 'react'

const Resume = () => {
    return (
      <div className='container m-7 px-4'>  
        <section className='mb-8'> 
          <h1 className='text-3xl font-bold'>Marcus Kimber</h1>
          <p>Customer and Data Focused Developer</p>
          <p>Charlotte, NC 28269 | marcdevceo@icloud.com | +1-980-358-0566</p>
        </section>
        <section className='mb-8'> 
          <h2 className='text-2xl mb-2'>Summary</h2>
          <p>
            Highly motivated and results-oriented developer with a strong foundation in 
            web development (HTML, CSS, JavaScript) and Python. Eager to leverage my skills 
            and gain experience building dynamic web applications. Adept at learning new 
            technologies and passionate about continuous improvement.
        </p>
        </section>
        <section className='mb-8'>
          <h2 className='font-bold'>Skills</h2>
          <ul className='list-disc pl-4'>
            <li>Proficient in HTML/CSS/JavaScript, with a strong understanding of front-end web development principles</li>
            <li>Experienced in utilizing the Tailwind CSS framework for efficient and scalable styling solutions</li>
            <li>Skilled in building interactive web applications using React.js library and Next.js frameworks, leveraging their powerful features for enhanced user experiences</li>
            <li>Competent in Python programming and proficient in utilizing the Django framework for rapid development of web applications</li>
            <li>Experienced in working with various databases including SQLite, MySQL, and PostgreSQL, proficient in designing and optimizing database structures</li>
            <li>Proficient in implementing user authentication mechanisms to ensure secure access and data protection</li>
            <li>Familiar with cloud computing platforms such as AWS, Azure, and Digital Ocean, with hands-on experience in deploying and managing applications in cloud environments</li>
          </ul>
        </section>
        <h2 className='font-bold'>Work Experience</h2>
        <section className='mt-5'>
            <h3 className='blog-section'>Technical Team Manager</h3>
            <h4 className='blog-section'>Kelly Connect/Apple - Charlotte, NC April 2019 to Present</h4>
            <ul className='list-disc p-5'>
                <li>Manages a team of 10 – 20 technical advisors</li>
                <li>Evaluate employee performance and coach to improve weak areas</li>
                <li>
                    Conducts weekly meetings to keep the team informed of any updates to 
                    policies and procedures
                </li>
                <li>
                    Developed Excel dashboards to track KPIs, resulting in steady improvements in CSATs and 
                    AHT MoM
                </li>
                <li>Use MS SharePoint to manage internal files and share with authorized team members</li>
                <li>Deliver corrective actions to underperforming agents and the skills to start meeting goals</li>
                <li>Participates in weekly Quality meeting and quarterly Calibrations with Apple</li>
            </ul>
        </section> 
        <section className='mt-5'>
            <h3 className='blog-section'>Quality Assurance Analyst/Coach  </h3>
            <h4 className='blog-section'>Kelly Connect/Apple - Charlotte, NC June 2017 to April 2019</h4>
            <ul className='list-disc p-5'>
                <li>
                    Evaluated and Coached technical reps phone and chat interactions with 
                    customers based off Apple quality standards
                </li>
                <li>Evaluated Team Lead/Supervisor evaluations to ensure scoring consistencys</li>
                <li>Participated in Internal monthly and Apple quarterly calibrations</li>
                <li>
                    Supported company in maintaining work environment focused on quality, 
                    communication, collaboration, integration and teamwork
                </li>
                <li>Fixed identified issues to increase productivity and boost workflows</li>
                <li>Created job aids and presentations based on technical documentation created by Apple</li>
                <li>Reported problems and concerns to management</li>
            </ul>
        </section> 
        <section className='mt-5'>
            <h3 className='blog-section'>Tech Support Advisor</h3>
            <h4 className='blog-section'>Kelly Connect/Apple - Charlotte, NC August 2016 to June 2017</h4>
            <ul className='list-disc p-5'>
                <li>
                    Assisted customers in identifying issues and explained solutions to restore
                    service and functionality 
                </li>
                <li>
                    Resolved diverse range of technical issues across multiple systems and 
                    applications for customers and end-users across various time zones
                </li>
                <li>Translated complex technical issues into digestible language for non-technical users </li>
                <li>Used ticketing systems to manage and process support actions and requests</li>
                <li>Achieved ranking of Top 1% in my line of business and Top 5% of the company </li>
            </ul>
        </section> 
        <section className='mt-5'>
            <h3 className='blog-section'>Reservation Specialist</h3>
            <h4 className='blog-section'>Enterprise Holdings, Inc - Charlotte, NC November 2015 to June 2016</h4>
            <ul className='list-disc p-5'>
                <li>
                    Assisted customers with making reservations and entered reservation details
                    into computer system
                </li>
                <li>
                    Resolved diverse range of technical issues across multiple systems and 
                    applications for customers and end-users across various time zones
                </li>
                <li>
                    Provided high level of customer service to each person by engaging customer
                    and using active listening and effective interpersonal skills
                </li>
                <li>Increased the company profit by a minimum of $30,000 each month</li>
            </ul>
        </section> 
        <section className='mt-5'>
            <h3 className='blog-section'>Store Manager</h3>
            <h4 className='blog-section'>United Cellular (Sprint) - Charlotte, NC April 2015 to November 2015</h4>
            <ul className='list-disc p-5'>
                <li>Managed inventory control, cash control and store opening and closing procedures</li>
                <li>
                    Managed store employees successfully in fast-paced environment through 
                    proactive communication and positive feedback
                </li>
                <li>
                    Maximized sales and minimized shrinkage through excellent customer service 
                    and adherence to standard practices
                </li>
                <li>
                    Coached sales associates in product specifications, sales incentives and 
                    selling techniques, significantly increasing customer satisfaction ratings
                </li>
                <li>Increased the store monthly profit margin by 46%</li>
                <li>Received North Carolina Manager of the Year for 2015</li>
            </ul>
        </section>
        <h2 className='font-bold'>Education</h2>
        <ul className='list-disc p-5'>
            <li>Completed - The Complete Web Developer Course - ZTM Academy - 2024</li>
            <li>Completed - The Complete Python Developer Course - ZTM Academy - 2024</li>
        </ul>
 
    </div>
  )
}

export default Resume