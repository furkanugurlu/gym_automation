import React, { useEffect, useState } from "react";
import { getImage } from "../../constant";
import api from "../../constant/api";
import Helmet from "react-helmet";
import { CategoriesItemList, PageTitle } from "../../components";
import { Link, useNavigate } from "react-router-dom";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const getRequest = async () => {
      const res = await api.get("furniture/read");
      const newData = res.data.map((tool, i) => {
        return { img: getImage(i, "sports-equipment"), ...tool };
      });
      setTools(newData);
    };
    getRequest();
  }, []);

  const removeHandle = (id) => {
    api.delete(`furniture/remove/${id}`).then((res) => {
      const newCat = tools.filter((x) => x.esyaID !== id);
      setTools(newCat);
    });
  };

  const updateHandle = (id) => {
    navigation(`/tools/update-tools/${id}`);
  };

  return (
    <div className="container flex flex-col md:container md:mx-auto">
      <Helmet>
        <title>ArenaGYM - Eşyalar</title>
      </Helmet>
      <PageTitle title="Sport Aletleri" link="/tools/create-tools" />

      <CategoriesItemList
        remove
        update
        secondary
        data={tools}
        removeHandle={(id) => removeHandle(id)}
        updateHandle={(id) => updateHandle(id)}
      />
    </div>
  );
};

export { Tools };
