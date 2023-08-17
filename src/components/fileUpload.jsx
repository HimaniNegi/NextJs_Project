import React, { useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  console.log(selectedFile,"selectedFile");
  return (
    <div>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <Button variant="contained" component="span">
          Upload Document
        </Button>
      </label>
      {selectedFile && (
        <Paper elevation={3} style={{ padding: '10px', marginTop: '20px' }}>
          <Typography variant="subtitle1">Uploaded File:</Typography>
          <Typography variant="body1">{selectedFile.name}</Typography>
        </Paper>
      )}
    </div>
  );
};

export default FileUpload;
