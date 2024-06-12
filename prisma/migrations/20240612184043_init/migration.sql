-- CreateTable
CREATE TABLE "Acesso" (
    "id_acesso" SERIAL NOT NULL,
    "data_acesso" TIMESTAMP(3) NOT NULL,
    "hora_acesso" TEXT NOT NULL,
    "pessoas_acesso" TEXT NOT NULL,
    "local_acesso" TEXT NOT NULL,

    CONSTRAINT "Acesso_pkey" PRIMARY KEY ("id_acesso")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nome_usuario" TEXT NOT NULL,
    "senha_usuario" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "id_pessoa" SERIAL NOT NULL,
    "nome_pessoa" TEXT NOT NULL,
    "cpf_pessoa" TEXT NOT NULL,
    "rg_pessoa" TEXT NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id_pessoa")
);
