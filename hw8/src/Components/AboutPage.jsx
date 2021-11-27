import React, { useState, useEffect } from "react";
import {Typography} from "antd";
import {Octokit} from "@octokit/core";

const {request} = new Octokit({auth: `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`});

export function AboutPage() {
    const githubInfo = useGithubInfo('Demetrius98')
    return (
        <div>
            <Typography.Title>
                О нас
            </Typography.Title>
            <Typography.Paragraph>
                Имя: {githubInfo.name}
            </Typography.Paragraph>
            <Typography.Paragraph>
                Email: {githubInfo.email}
            </Typography.Paragraph>
            <Typography.Paragraph>
                Информация: {githubInfo.bio}
            </Typography.Paragraph>
        </div>
    )
}

function useGithubInfo(username) {
    const [data, setData] = useState({
        name: "",
        email: "",
        bio: ""
    })
    useEffect(() => {
        request('GET /users/' + username, {
            username: 'username'
        }).then(result => {
            setData(result.data)
        })
    }, [username]);
    return data
}