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
  },
  {
    id: "10",
    title: "Shells",
    description: "Find potential web shells",
    category: "BROWSER",
    dorks: [
      {
        id: "10-1",
        label: "Web Shells",
        query: 'site:(site) inurl:c99 | inurl:r57 | i inurl:cmd | inurl:command | inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor | inurl:ws0 | inurl:cmd | inurl:command | inurl:exec | inurl:execute',
      },
    ],
  },
  {
    id: "11",
    title: "Open Redirects",
    description: "Find potential open redirect vulnerabilities",
    category: "BROWSER",
    dorks: [
      {
        id: "11-1",
        label: "Open Redirects",
        query: 'site:(site) inurl:"redirect=" | inurl:"data=" | inurl:return | inurl:"reference=" | inurl:"_redir=" | inurl:"_url=" | inurl:"_next=" | inurl:"_reference=" | inurl:src=http | inurl:r=http | inurl:redirect_uri=http | inurl:redirect_url=http | inurl:return=http | inurl:return_url=http | inurl:next=http | inurl:dest=http | inurl:destination=http | inurl:url=http',
      },
    ],
  },
  {
      id: "12",
      title: "Structs RCEs",
      description: "Find potential struct RCE vulnerabilities",
      category: "BROWSER",
      dorks: [
        {
          id: "12-1",
          label: "Struct RCEs",
          query: 'site:(site) site:test.com ext:action | ext:struts | ext:do | inurl:"?search=" | inurl:"?query=" | inurl:"?q=" | inurl:"?s=" | inurl:"?keyword=" | inurl:"?keywords=" | inurl:"?term=" | inurl:"?terms=" | inurl:"?filter=" | inurl:"?id=" | inurl:"?page=" | inurl:"?view=" | inurl:"?type="',
        },
      ],
  },
  {
      id: "13",
      title: "WP Admin Pages and Files",
      description: "Find WordPress admin pages and files",
      category: "BROWSER",
      dorks: [
        {
          id: "13-1",
          label: "WP Admin Pages",
          query: 'site:(site) inurl:"wp-admin" | inurl:wp-content | inurl:wp-includes | inurl:wp-uploads | inurl:wp-config.php | inurl:readme.html | inurl:license.txt | inurl:xmlrpc.php | inurl:wp-json | inurl:wp-cron.php | inurl:wp-admin.php | inurl:admin-ajax.php | inurl:admin.php | inurl:login.php',
        },
      ],
  },
  {
    id: "14",
    title: "Exposed AWS Buckets",
    description: "Find publicly accessible AWS S3 buckets",
    category: "BROWSER",
    dorks: [
      {
        id: "14-1",
        label: "AWS S3 Buckets",
        query: 'site:(site) intitle:"index of" inurl:s3.amazonaws.com | inurl:bucket | inurl:storage | inurl:files | inurl:data | inurl:backup | inurl:assets | inurl:media | inurl:downloads | inurl:uploads',
      },
    ],
  },
  {
      id: "15",
      title: "Exposed Git Repositories",
      description: "Find publicly accessible Git repositories",
      category: "BROWSER",
      dorks: [
        {
          id: "15-1",
          label: "Git Repos",
          query: 'site:(site) inurl:".git" | inurl:"/.git" | inurl:"/git" | inurl:"/repository" | inurl:"/repo" | inurl:"/version-control" | inurl:"/source-code" | inurl:"/scm" | inurl:"/vcs" | inurl:".gitignore" -github',
        },
      ],
  },
  {
      id: "16",
      title: "Exposed Jenkins Instances",
      description: "Find publicly accessible Jenkins instances",
      category: "BROWSER",
      dorks: [
        {
          id: "16-1",
          label: "Jenkins Instances",
          query: 'site:(site) inurl:"/jenkins" | inurl:"/hudson" | inurl:"/ci" | inurl:"/build" | inurl:"/job" | inurl:"/view" | inurl:"/queue" | inurl:"/computer" | inurl:"/node" | inurl:"/plugin" | inurl:"/script" | inurl:"/api/json"',
        },
      ],
  },
  {
      id: "17",
      title: "Exposed Docker Registries",
      description: "Find publicly accessible Docker registries",
      category: "BROWSER",
      dorks: [
        {
          id: "17-1",
          label: "Docker Registries",
          query: 'site:(site) inurl:"/docker" | inurl:"/registry" | inurl:"/repo" | inurl:"/repository" | inurl:"/docker-registry"',
        },
      ],
  },
  {
      id: "18",
      title: "Exposed Kubernetes Clusters",
      description: "Find publicly accessible Kubernetes clusters",
      category: "BROWSER",
      dorks: [
        {
          id: "18-1",
          label: "Kubernetes Clusters",
          query: 'site:(site) inurl:"/kubernetes" | inurl:"/kube" | inurl:"/k8s" | inurl:"/cluster" | inurl:"/api/v1"',
        },
      ],
  },
  {
      id: "19",
      title: "ENV Files",
      description: "Find exposed ENV files",
      category: "BROWSER",
      dorks: [
        {
          id: "19-1",
          label: "ENV Files",
          query: 'site:(site) filename:.env | filename:.env.local | ext:env | ext:dotenv | ext:envrc | ext:env.example | ext:env.sample | ext:env.bak | ext:env.backup',
        },
      ],
  },
  {
      id: "20",
      title: "Exposed API Endpoints",
      description: "Find publicly accessible API endpoints",
      category: "BROWSER",
      dorks: [
        {
          id: "20-1",
          label: "API Endpoints",
          query: 'site:(site) inurl:"/api" | inurl:"/v1" | inurl:"/v2" | inurl:"/v3" | inurl:"/graphql" | inurl:"/rest" | inurl:"/json" | inurl:"/xml"',
        },
      ],
  },
  {
      id: "21",
      title: "HTaccess Files Or Info",
      description: "Find exposed HTaccess files or information",
      category: "BROWSER",
      dorks: [
        {
          id: "21-1",
          label: "HTaccess Files",
          query: 'site:(site) filename:.htaccess | filename:.htpasswd | inurl:"/.htaccess" | inurl:"/.htpasswd"',
        },
      ],
  },
  {
      id: "22",
      title: "Install Files and Setups",
      description: "Find exposed install files and setup pages",
      category: "BROWSER",
      dorks: [
        {
          id: "22-1",
          label: "Install Files",
          query: 'site:(site) inurl:"/install" | inurl:"/setup" | inurl:"/config" | inurl:"/configuration" | inurl:"/init" | inurl:"/initialize" | inurl:"/db_init" | inurl:"/db_setup" | inurl:"/db_install"',
        },
      ],
  },
  {
      id: "23",
      title: "Exposed Grafana Dashboards",
      description: "Find publicly accessible Grafana dashboards",
      category: "BROWSER",
      dorks: [
        {
          id: "23-1",
          label: "Grafana Dashboards",
          query: 'site:(site) inurl:"/grafana" | inurl:"/dashboard" | inurl:"/d/" | inurl:"/db/" | inurl:"/api/dashboards" | inurl:"/api/search"',
        },
      ],
  },
  {
      id: "24",
      title: "Exposed RabbitMQ Management Consoles",
      description: "Find publicly accessible RabbitMQ management consoles",
      category: "BROWSER",
      dorks: [
        {
          id: "24-1",
          label: "RabbitMQ Consoles",
          query: 'site:(site) inurl:"/rabbitmq" | inurl:"/management" | inurl:"/admin" | inurl:"/console" | inurl:"/ui" | inurl:"/overview"',
        },
      ],
  }
]
