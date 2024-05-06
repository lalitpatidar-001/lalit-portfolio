import logo from "@/assets/react-logo.png"
import Image from "next/image";

// frontend logo imports
import html_logo from "@/assets/html-logo.png"
import css_logo from "@/assets/css-logo.png"
import tailwind_css_logo from "@/assets/tailwind-logo.png"
import javascript_logo from "@/assets/js-logo.png"
import typescript_logo from "@/assets/ts-logo.png"
import react_logo from "@/assets/react-logo.png"
import nextjs_logo from "@/assets/next_logo.png"
import material_ui_logo from "@/assets/mui-logo.png"
import redux_logo from "@/assets/redux-logo.png"
import jest_logo from "@/assets/jest-logo.png"
import testing_library_logo from "@/assets/testing-logo.png"


// backend logo imports 
import java_logo from "@/assets/java-logo.png"
import python_logo from "@/assets/python-logo.png"
import nodejs_logo from "@/assets/node-logo.png"
import express_logo from "@/assets/express-logo.png"
import mongodb_logo from "@/assets/mongo_logo.png"
import message_queue_logo from "@/assets/message-queue-logo.png"
import sql_logo from "@/assets/sql-logo.png"
import bullmq_logo from "@/assets/bull-mq-logo.png"
import graphql_logo from "@/assets/graph-ql-logo.png"
import socket_io_logo from "@/assets/socket-io-logo.png"
import django_logo from "@/assets/django-logo.png"
import webrtc_logo from "@/assets/webrtc-logo.png"
import kafka_logo from "@/assets/kafka-logo.png"
import flask_logo from "@/assets/flask-logo.png"


// devops
import docker_logo from "@/assets/docker-logo.png"
import kubernetes_logo from "@/assets/kubernetes-logo.png"
import jenkins_logo from "@/assets/jenkins-logo.png"
import git_logo from "@/assets/git-logo.png"
import github_logo from "@/assets/github1-logo.png"
import cicd_logo from "@/assets/ci-cd-logo.png"
import ansible_logo from "@/assets/ansible-logo.png"
import aws_logo from "@/assets/aws-logo2.png"
import gitlab_logo from "@/assets/gitlab-logo.png"

// database
import mysql_logo from "@/assets/mysql-logo2.png"
import postgresql_logo from "@/assets/postgre-sql-logo.png"
import redis_logo from "@/assets/redis-logo.png"




interface SkillBoxProps {

    logo: string,
    name: string
}

const SkillBox: React.FC<SkillBoxProps> = ({ logo, name }) => {

    const skills: any = {
        // frontend logos
        html_logo: html_logo,
        css_logo: css_logo,
        tailwind_css_logo: tailwind_css_logo,
        javascript_logo: javascript_logo,
        typescript_logo: typescript_logo,
        react_logo: react_logo,
        nextjs_logo: nextjs_logo,
        material_ui_logo: material_ui_logo,
        redux_logo: redux_logo,
        jest_logo: jest_logo,
        testing_library_logo:testing_library_logo,

        // backend
        java_logo: java_logo,
        python_logo: python_logo,
        nodejs_logo: nodejs_logo,
        express_logo: express_logo,
        mongodb_logo: mongodb_logo,
        message_queue_logo: message_queue_logo,
        sql_logo: sql_logo,
        bullmq_logo: bullmq_logo,
        graphql_logo: graphql_logo,
        django_logo: django_logo,
        socket_io_logo: socket_io_logo,
        webrtc_logo: webrtc_logo,
        kafka_logo: kafka_logo,
        flask_logo: flask_logo,

        // devops
        docker_logo: docker_logo,
        kubernetes_logo: kubernetes_logo,
        jenkins_logo: jenkins_logo,
        git_logo: git_logo,
        github_logo: github_logo,
        cicd_logo: cicd_logo,
        ansible_logo: ansible_logo,
        aws_logo: aws_logo,
        gitlab_logo: gitlab_logo,

        // database
        mysql_logo: mysql_logo,
        postgresql_logo:postgresql_logo,
        redis_logo:redis_logo,


    }
    return (
        <div className='flex items-center gap-1 w-fit bg-white px-2 py-1 rounded-2xl '>
            <Image src={skills[logo]} className="h-4 w-5" height={5} width={25} alt="icon" />
            <span className="text-[12px] font-semibold text-black ">{name}</span>
        </div>
    );
}

export default SkillBox;