import React, { useState, useEffect } from 'react';

export default function Log({ data }) {
  return (
    <ol>
      {data.map((v) => (
        <li>{v}</li>
      ))}
    </ol>
  );
}
