export type Category = {
  id: string
  name: string
}

export type Dork = {
  id: string
  label: string
  query: string
}

export type Module = {
  id: string
  title: string
  description: string
  category: string
  dorks: Dork[]
}

export const modules: Module[] = [
  {
    id: "1",
    title: "Directory Listing",
    description: "Find exposed directory indexes",
    category: "RECON",
    dorks: [
      {
        id: "1-1",
        label: "Index Of Search",
        query: 'site:(site) intitle:"index of"',
      },
    ],
  },
  {
    id: "2",
    title: "Exposed Configs",
    description: "Find public configuration files",
    category: "FILES",
    dorks: [
      {
        id: "2-1",
        label: "Env Files",
        query: 'site:nasa.gov ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini',
      },
    ],
  },
  {
    id: "3",
    title: "DB Files",
    description: "Find public database files",
    category: "FILES",
    dorks: [
      {
        id: "3-1",
        label: "DB Files",
        query: 'site:(site) ext:sql | ext:dbf | ext:mdb',
      },
    ],
  },
  {
    id: "4",
    title: "Log Files",
    description: "Find public log files",
    category: "FILES",
    dorks: [
      {
        id: "4-1",
        label: "Log Files",
        query: 'site:(site) ext:log',
      },
    ],
  },
  {
    id: "5",
    title: "Backup Files",
    description: "Find public backup files",
    category: "FILES",
    dorks: [
      {
        id: "5-1",
        label: "Backup Files",
        query: 'site:(site) ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup',
      },
    ],
  },
  {
    id: "6",
    title: "Login Pages",
    description: "Find login portals",
    category: "RECON",
    dorks: [
      {
        id: "6-1",
        label: "Login Pages",
        query: 'site:(site) inurl:login | inurl:signin | inurl:auth | inurl:account',
      },
    ],
  }
]