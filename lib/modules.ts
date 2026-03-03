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
    category: "BROWSER",
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
    category: "BROWSER",
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
    category: "BROWSER",
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
    category: "BROWSER",
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
    category: "BROWSER",
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
    category: "BROWSER",
    dorks: [
      {
        id: "6-1",
        label: "Login Pages",
        query: 'site:(site) inurl:login | inurl:signin | inurl:auth | inurl:account',
      },
    ],
  },
  {
    id: "7",
    title: "SQL ERRORs",
    description: "Find SQL error messages",
    category: "BROWSER",
    dorks: [
      {
        id: "7-1",
        label: "SQL Errors",
        query: 'site:(site) intext:"sql syntax near" | intext:"sql syntax error" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()" | intext:"Warning: pg_query()"',
      },
    ],
  },
  {
    id: "8",
    title: "Public Documents",
    description: "Find publicly accessible documents",
    category: "BROWSER",
    dorks: [
      {
        id: "8-1",
        label: "Public Docs",
        query: 'site:(site) ext:doc | ext:docx | ext:ppt | ext:pptx | ext:xls | ext:xlsx | ext:pdf | ext:odt | ext:rtf | ext:sxw | ext:psw | ext:csv',
      },
    ],
  },
  {
    id: "9",
    title: "PHP Info",
    description: "Find exposed PHP info pages",
    category: "BROWSER",
    dorks: [
      {
        id: "9-1",
        label: "PHP Info",
        query: 'site:(site) intitle:"phpinfo()" | inurl:phpinfo | intitle:"php configuration" | inurl:"phpconf" | inurl:"php_config" | inurl:"phpinfo.php"',
      },
    ],
  }
]