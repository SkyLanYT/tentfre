import React from 'react';
import Announcement from 'components/announcement/Announcement';

const UsedTentsPage = ({ data }) => {
  return (
    <div>
      {data.map((tent, index) => (
        <div key={index}>
          <Announcement tent={tent} />
        </div>
      ))}
    </div>
  );
};

export default UsedTentsPage;
