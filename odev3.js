const folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 21, name: "photo.jpg" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

const removeFolder = (folderNum) => {
  return folders.filter((folder) => folder?.files.id !== folderNum);
};

const remove = (fileId) => {
  return folders.reduce((prev, current) => {
    if (current?.files) {
      const newFiles = current.files.reduce((innerPrev, innerCurrent) => {
        if (innerCurrent.id === fileId) {
          return [...innerPrev];
        } else {
          return [...innerPrev, innerCurrent];
        }
      }, []);
      return [
        ...prev,
        { id: current.id, name: current.name, files: [...newFiles] },
      ];
    } else {
      return [...prev, { id: current.id, name: current.name }];
    }
  }, []);
};

const move = (fileId, folderId) => {
  const newF = remove(fileId);
  const newFounded = newF.filter((folder) => folder.id !== folderId);
  let b = [];
  folders.forEach((folder) => {
    if (folder.files) {
      const foundFile = folder.files.find((file) => file.id === fileId);
      if (foundFile) b.push(foundFile);
    }
  });
  const founded = folders.find((folder) => folder.id === folderId);

  return [...newFounded, { ...founded, files: [...founded.files, ...b] }];
};

const copy = (fileId, folderId) => {
  let b = [];
  folders.forEach((folder) => {
    if (folder.files) {
      const foundFile = folder.files.find((file) => file.id === fileId);
      if (foundFile) b.push(foundFile);
    }
  });

  const finded = folders.find((folder) => folder.id === folderId);
  const filtered = folders.filter((folder) => folder.id !== folderId);
  if (finded.files) {
    return [
      ...filtered,
      { id: folderId, name: finded.name, files: [...finded.files, ...b] },
    ];
  } else {
    return [...filtered, { id: folderId, name: finded.name, files: [...b] }];
  }
};

const parentFolderOf = (parent) => {
  for (let i = 0; folders.length > i; i++) {
    if (folders[i].files) {
      if (folders[i].files.find((file) => file.id === parent)) {
        return folders[i].id;
      }
    }
  }
};

console.log(parentFolderOf(17));

//removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
//remove(17) // dosyayı silecek
// move(17,6) // dosyayı klasöre taşıyacak
// copy(18,7) // kopyasını oluşturacak
// parentFolderOf(17) // ==> 5
