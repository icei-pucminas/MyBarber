import * as bcrypt from 'bcrypt';

export const  validaSenha = async (senhaValida, senhaCorreta) => {
    const senhaValidaCorreta = await bcrypt.compare(senhaValida, senhaCorreta);
    if (!senhaValidaCorreta) {
        return false;
    }else{
        return true;
    }
}