import Baizi from '../models/baizi';

export const getBaiziByUser = async (id) => {
  const userBaizi = await Baizi.find({ author: id }).sort('-date');
  return userBaizi;
}

export const createBaizi = async (body) => {
  const { title, date, weather, content, author } = body;
  const newBaizi = Baizi({
    title,
    date, 
    weather,
    content,
    author,
  });

  const savedBaizi = await newBaizi.save();
  return savedBaizi;
}