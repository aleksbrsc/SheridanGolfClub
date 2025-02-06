import executives from '@data/executives.json'

const About = () => {

    const jsonData = JSON.stringify(executives)

    return(

        <div>
            <h1>Meet Your Executives</h1>
            <div>
            {executives.executives.map((member, index) => (
                <div key={index}>
                <h2>{member.first_name} {member.last_name}</h2>
                <p>{member.title}</p>
                <p>{member.duties}</p>
                <div>
                    <p href={member.linkedin}>LinkedIn</p>
                    
                    <p href={`mailto:${member.email}`}>{member.email}</p>
                </div>
                </div>
            ))}
            </div>
      </div>
      );
}

export default About;