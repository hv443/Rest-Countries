import React, { useState } from "react";
import RegionFilterBtn from "../mini_components/RegionFilterBtn";
import CountryCard from "./CountryCard";
import SearchFilter from "../mini_components/SearchFilter";

const HomePage = ({ countries, loading, error }) => {
    const [filteredCountries, setFilteredCountries] = useState(null);

    return (
        <div
            className="px-4 py-6 text-sm font-semibold space-y-8 text-primary bg-secondary duration-200 min-h-screen
                    md:px-10">
            <div
                className="flex flex-col gap-8
                       md:flex-row md:justify-between md:gap-0">
                <SearchFilter countries={countries} setFilteredCountries={setFilteredCountries} />

                <RegionFilterBtn
                    countries={countries}
                    setFilteredCountries={setFilteredCountries}
                />
            </div>

            {loading ? (
                <h1 className="w-full h-[50vh] text-3xl flex items-center justify-center">
                    Loading...
                </h1>
            ) : error ? (
                <h1 className="w-full  text-base text-center">{error}</h1>
            ) : (
                <CountryCard countries={filteredCountries ?? countries} />
            )}
        </div>
    );
};

export default HomePage;
