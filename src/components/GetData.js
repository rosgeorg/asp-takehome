import React, { useState } from 'react';
import '../styles/GetData.css';
import {
  useQuery,
  gql
} from "@apollo/client";
import { Breadcrumb, BreadcrumbItem, Badge } from 'reactstrap';

function GetData() {

  const [topicName, setTopicName] = useState('react');

  const TOPICS = gql`
  query ($name: String!){
    topic(name: $name) {
      id
      name
      stargazerCount
      relatedTopics(first: 10) {
        name
        stargazerCount
      }
    }
  }
`;

  const { loading, error, data } = useQuery(TOPICS, {
    variables: { name: topicName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  
  return (
    <div className="get-data">
      <div className='d-flex flex-column align-items-start mb-4 topic'>
        <h1>Main Topic:</h1>
        <h2>{data.topic.name} <Badge className='bg-dark'>Stargazers: {data.topic.stargazerCount}</Badge></h2>
      </div>
      <h1 className='d-flex justify-content-start content'>
        Related Topics:
      </h1>
      {data.topic.relatedTopics.map((topic, key) => {
        return (
          <Breadcrumb key={key} className='bg-white content breadcrumbs'>
            <BreadcrumbItem className="breadcrumb-content"><button onClick={() => setTopicName(topic.name)} className="topic-button">{topic.name}</button></BreadcrumbItem>
            <BreadcrumbItem active className="text-dark">Stargazers: {topic.stargazerCount}</BreadcrumbItem>
          </Breadcrumb>
        )
      })}
    </div>
  );
}

export default GetData;
