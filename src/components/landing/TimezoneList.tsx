import React, { useEffect, useState } from "react";
import { getTimezones } from "../../api/timezoneApi";

interface Timezone {
  id: number;
  name: string;
  city: string;
  offset: string;
}

const TimezoneList: React.FC = () => {
  const [timezones, setTimezones] = useState<Timezone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTimezones();
        setTimezones(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Timezones</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">Offset</th>
          </tr>
        </thead>
        <tbody>
          {timezones.map((tz) => (
            <tr key={tz.id} className="text-center">
              <td className="p-2 border">{tz.id}</td>
              <td className="p-2 border">{tz.name}</td>
              <td className="p-2 border">{tz.city}</td>
              <td className="p-2 border">{tz.offset}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimezoneList;
