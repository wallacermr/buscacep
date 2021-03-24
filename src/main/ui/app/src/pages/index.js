import { useState } from 'react';

import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Table } from "../components/Table";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Table />
    </div>
  )
}