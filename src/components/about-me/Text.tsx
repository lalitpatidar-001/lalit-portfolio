interface TextProps {

}

const Text: React.FC<TextProps> = () => {
    return (
        <div className="bg-[#181818] p-4 text-sm rounded-2xl">
            <p className="">
            As a versatile Full Stack Developer, I possess a rich skill set encompassing frontend technologies like HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Material-UI, and Redux. On the backend, I excel in Java, Python, Node.js, Express, SQL, GraphQL, Django, and Flask, while also adept in implementing real-time communication with Socket.io and WebRTC, and managing message queues with Kafka. My proficiency extends to DevOps practices, including Docker, Kubernetes, Jenkins, Git, GitHub, GitLab, CI/CD pipelines, Ansible, and AWS. Additionally, I have experience with MongoDB, MySQL, PostgreSQL, and Redis for database management. This breadth of expertise enables me to develop robust, scalable, and efficient web applications, ensuring seamless user experiences and optimal performance.
            </p>
        </div>
    );
}

export default Text;