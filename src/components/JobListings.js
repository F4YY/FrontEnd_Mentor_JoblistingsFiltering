import React from "react";
import jobs from "../data.json";
import { Container } from "./styled/container.styled";
import {
  Attribution,
  AttributionA,
  Category,
  ClearCategory,
  FirstColumn,
  FirstRow,
  Header,
  Hstackflexi,
  Jobcard,
  Logo,
  Searchbar,
  SearchedCategory,
  SelectedCategory,
  Styledjoblist,
  ThirdRow,
} from "./styled/joblisting.styled";

export const JobListings = () => {
  const [selectedRole, setSelectedRole] = React.useState("");
  const [selectedLevel, setSelectedLevel] = React.useState("");
  const [selectedLanguages, setSelectedLanguages] = React.useState([]);
  const [selectedTools, setSelectedTools] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);

  const JobList = ({ jobs }) => {
    return (
      <Styledjoblist>
        {jobs.map((job) => (
          <Jobcard
            key={job.id}
            featured={job.featured}
          >
            <Hstackflexi>
              <Logo src={require(`${job.logo}`)} alt={job.logo}/>
              <FirstColumn>
                <FirstRow>
                  <p className='company_name'>{job.company}</p>
                  {job.new && <p className="new_coming">New!</p>}
                  {job.featured && <p className="featured_info">Featured</p>}
                </FirstRow>
                <p className="job_positioning">{job.position}</p>
                <ThirdRow>
                  <p>{job.postedAt}</p><p className="dot_separator">.</p>
                  <p>{job.contract}</p><p className="dot_separator">.</p>
                  <p>{job.location}</p>
                </ThirdRow>
              </FirstColumn>
            </Hstackflexi>
            <Category>
              <button onClick={() => handleRoleChange(job.role)}>
                  {job.role }
              </button>
              <button onClick={() => handleLevelChange(job.level)}>
                  {job.level }
              </button>
              {job.languages.map((language) => (
                <button
                  onClick={() => handleLanguageChange(language)}
                  key={language}
                >
                  {language}
                </button>
              ))}
              {job.tools.map((tool) => (
                <button
                  onClick={() => handleToolChange(tool)}
                  key={tool}
                >
                  {tool}
                </button>
              ))}
            </Category>
          </Jobcard>
        ))}
      </Styledjoblist>
    );
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setToggle(true);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setToggle(true);
  };

  const handleLanguageChange = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
    setToggle(true);
  };

  const handleToolChange = (tool) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
    setToggle(true);
  };

  const filteredJobs = jobs.filter((job) => {
    const roleMatch = selectedRole ? job.role === selectedRole : jobs;
    const levelMatch = selectedLevel ? job.level === selectedLevel : jobs;
    const languagesMatch = selectedLanguages.length
      ? selectedLanguages.every((language) => job.languages.includes(language))
      : jobs;
    const toolsMatch = selectedTools.length
      ? selectedTools.every((tool) => job.tools.includes(tool))
      : jobs;

    return roleMatch && levelMatch && languagesMatch && toolsMatch;
  });

  return (
    <Container>
      <Header/>
        {toggle && (
          <Searchbar>
            <SearchedCategory>
              {selectedRole && (
                <SelectedCategory>
                  <p className="category_search">
                    {selectedRole}
                  </p>
                  <img
                    src={require("./images/icon-remove.svg").default}
                    alt="remove"
                    onClick={()=>setSelectedRole(null)}
                  />
                </SelectedCategory>
              )}
              {selectedLevel && (
                <SelectedCategory>
                  <p className="category_search">
                    {selectedLevel}
                  </p>
                  <img
                    src={require("./images/icon-remove.svg").default}
                    alt="remove"
                    onClick={()=>setSelectedLevel(null)}
                  />
                </SelectedCategory>
              )}
              {selectedLanguages && (
                <>
                  {selectedLanguages.map((language) => (
                    <SelectedCategory>
                      <p className="category_search">
                        {language}
                      </p>
                      <img
                        src={require("./images/icon-remove.svg").default}
                        alt="remove"
                        onClick={() => handleLanguageChange(language)}
                        key={language}
                      />
                    </SelectedCategory>
                  ))}
                </>
              )}
              {selectedTools && (
                <>
                  {selectedTools.map((tool) => (
                    <SelectedCategory>
                      <p className="category_search">
                        {tool}
                      </p>
                      <img
                        src={require("./images/icon-remove.svg").default}
                        alt="remove"
                        onClick={() => handleToolChange(tool)}
                        key={tool}
                      />
                    </SelectedCategory>
                  ))}
                </>
              )}
            </SearchedCategory>
            <ClearCategory>
            {!selectedRole && !selectedLevel && !selectedLanguages.length && !selectedTools.length? (setToggle(false)):(
              <button
                onClick={() => {
                  setToggle(false);
                  setSelectedRole(null);
                  setSelectedLevel(null);
                  setSelectedLanguages([]);
                  setSelectedTools([]);
                }}>
                  Clear
              </button>
              )
            }
            </ClearCategory>
          </Searchbar>
        )}
      <JobList
        jobs={filteredJobs}
      />
      <footer>
        <Attribution>
            <AttributionA>
              <p>Challenge by<a href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Job listings with filtering.</a></p>
            </AttributionA>
            <AttributionA>
              <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
            </AttributionA>
        </Attribution>
      </footer>
    </Container>
  )
}
