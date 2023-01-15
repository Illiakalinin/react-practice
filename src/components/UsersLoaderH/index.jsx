import React, { useEffect, useState } from "react";

function UsersLoaderH() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setresults] = useState(5);

  const loadUsers = () => {
    setIsFetching(true);
    fetch(`https://randomuser.me/api?results=5&seed=pe2022&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  };

  useEffect(() => {
    loadUsers();
  }, [currentPage, results]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      {error && <div>!!!ERROR!!!</div>}
      {isFetching && <div>Loading. Please wait...</div>}
      {!error && !isFetching && (
        <>
          <button onClick={prevPage}>{"<"}</button>
          <button onClick={nextPage}>{">"}</button>
          <ul>
            {users.map((u) => (
              <li key={u.login.uuid}>{JSON.stringify(u)}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default UsersLoaderH;
